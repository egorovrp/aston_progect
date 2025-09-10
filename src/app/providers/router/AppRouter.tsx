import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PostsPage } from "../../../pages/PostsPage/PostsPage";
import { PostDetailsPage } from "../../../pages/PostDetailsPage/PostDetailsPage";
import { UserPostsPage } from "../../../pages/UserPostsPage/UserPostsPage";
import AlbumPhotosPage from "../../../pages/AlbumPhotosPage/AlbumPhotosPage";
import UserAlbumsPage from "../../../pages/UserAlbumsPage/UserAlbumsPage";
import UserTodosPage from "../../../pages/UserTodosPage/UserTodosPage";
import NotFound from "../../../errors/NotFound";
import CommentsPage from "../../../pages/UserCommentsPage/UserCommentsPage";

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailsPage />} />
      <Route path="/users/:id/posts" element={<UserPostsPage />} />
      <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />
      <Route path="/users/:id/albums" element={<UserAlbumsPage />} />
      <Route path="/users/:id/todos" element={<UserTodosPage />} />
      <Route path="/comments" element={<CommentsPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
