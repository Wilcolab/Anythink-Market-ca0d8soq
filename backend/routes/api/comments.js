/**
 * @route GET /post/:postId
 * @description Get all comments for a specific post.
 * @param {string} req.params.postId - The ID of the post to retrieve comments for.
 * @returns {Array<Object>} 200 - An array of comment objects.
 * @throws {Error} 500 - Internal server error.
 */

/**
 * @route DELETE /:commentId
 * @description Delete a comment by its ID.
 * @param {string} req.params.commentId - The ID of the comment to delete.
 * @returns {StatusCode} 200 - Successfully deleted the comment.
 * @throws {Error} 500 - Internal server error.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, write a route to get all comments for a specific post
router.get("/post/:postId", async (req, res, next) => {
    try {
        const comments = await Comment.find({ post: req.params.postId });
        res.json(comments);
    } catch (err) {
        next(err);
    }
});

// add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res) => {
    Comment.findByIdAndDelete(req.params.commentId)
    .then(() => res.sendStatus(200))
    .catch(next);
});