//Page for question categories
import { useState } from "react";
import { useParams } from "react-router-dom";
import { questions } from "../data";
import { Box } from "@mui/material";
import { Questions } from "../components/Questions";

export const CategoryPage = () => {
  const { nameCategory } = useParams();

  //This status filters questions by the selected category
  const [questionsF, setQuestionsF] = useState(
    questions.filter((q) => q.category === nameCategory)
  );

  //This state handles the index of the question
  const [indexQuestion, setindexQuestion] = useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <Box
        sx={{
          width: 400,
          height: "auto",
          backgroundColor: "whitesmoke",
          padding: 5,
        }}
      >
        <Questions
          nameCategory={nameCategory}
          questionsF={questionsF}
          indexQuestion={indexQuestion}
          filteredQuestions={questionsF[indexQuestion]}
          setindexQuestion={setindexQuestion}
        />
      </Box>
    </div>
  );
};
