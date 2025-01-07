import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4>
        {question.question}
        <Options question={question} />
      </h4>
    </div>
  );
}

export default Question;
