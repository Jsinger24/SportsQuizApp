import React from 'react';

interface QuizProps {
  text?: string;
}

export default function QuizQuestion(props: QuizProps) {
  const { text = 'I am sports' } = props;

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
