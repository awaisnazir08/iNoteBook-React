const express = require('express')
const router = express.Router()
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//ROUTE 1: get all the notes using GET "api/notes/fetchallnotes", Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

});

//ROUTE 2: add a new note using POST "api/notes/addnote". Login required
router.post('/addnote', fetchuser,
    [
        body("title", "Enter a valid Title").isLength({ min: 3 }),
        body("description", "Description must be atleast 5 characters").isLength({ min: 5 }),
    ],
    async (req, res) => {
        try {
            //if there are errors, return bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { title, description, tag } = req.body;
            const note = new Note({
                title, description, tag, user: req.user.id
            });
            if (req.user.id) {
                console.log("Hello, I am here")
            }
            const savedNote = await note.save();
            res.json(savedNote);
        }
        catch (error) {
            console.log(error.message);
            res.status(500).send("Internal Server Error");
        }

    });

//ROUTE 3: update an existing note using PUT "api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({ min: 5 }),
],
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            const newNote = {};
            if (title) {
                newNote.title = title;
            }
            if (description) {
                newNote.description = description;
            }
            if (tag) {
                newNote.tag = tag;
            }

            //Find the note to be updated and update it
            let note = await Note.findById(req.params.id);
            if (!note) {
                return res.status(404).send("Not found..!!");
            }
            //allow updation only if the user owns this particular note
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed..!!");
            }

            note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
            res.json({ note });
        }
        catch (error) {
            console.log(error.message);
            res.status(500).send("Internal Server Error");
        }

    }
);


//ROUTE 4: delete an existing note using DELETE "api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser,
    async (req, res) => {
        try {
            //Find the note to be deleted and delete it
            let note = await Note.findById(req.params.id);
            if (!note) {
                return res.status(404).send("Not found..!!");
            }
            //allow deletion only if the user owns this note
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed..!!");
            }
            note = await Note.findByIdAndDelete(req.params.id);
            res.json({ "Success": "Note has been successfully deleted..!!", note: note });
        }
        catch (error) {
            console.log(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

module.exports = router