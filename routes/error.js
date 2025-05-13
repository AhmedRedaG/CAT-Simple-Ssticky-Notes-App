import { Router } from "express";

const router = Router();

router.use((req, res) => {
  res.render("error", { pageTitle: "Error", error: "Page not found" });
});

export default router;
