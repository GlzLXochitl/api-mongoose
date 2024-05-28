import { Router } from "express";
import express from "express";
import ArticleModel from "../models/article.js";

const router = Router();

router.post("/articles", async (request, response) => {
  const article = new ArticleModel(request.body);
  try {
    await article.save();
    response.status(200).send({ message: 'Article added successfully', article });
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);
    if (!article) {
      return res.status(404).send('No article found with the given ID');
    }
    res.status(200).send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/articles/:id", async (req, res) => { 
  try {
    const article = await ArticleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // This option returns the updated document
    );
    if (!article) {
      return res.status(404).send('No article found with the given ID');
    }
    res.status(200).send({ message: 'Article change successfully', article });
  } catch (error) {
    res.status(500).send(error);
  }
});

//edicion completa put
router.put("/articles/:id", async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } 
    );
    if (!article) {
      return res.status(404).send('No article found with the given ID');
    }
    res.status(200).send({ message: 'Article change successfully', article });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/articles/:id", async (req, res) => {
  try{
    const article = await ArticleModel.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).send('No article found with the given ID');
    }
    res.status(200).send({ message: 'Article deleted successfully', article });
  } catch (error){
    res.status(500).send(error);
  }
});






export default router;