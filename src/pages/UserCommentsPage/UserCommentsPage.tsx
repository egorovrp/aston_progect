import React from 'react';
import { useParams } from 'react-router-dom';

const CommentsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <div>Комментарии {id}</div>;
};

export default CommentsPage;