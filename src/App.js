import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LibraryPage,
  LikeVediosPage,
  ShortsPage,
  VideoPage,
} from "./pages";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shorts" element={<ShortsPage />} />
          <Route path="vedio/id" element={<VideoPage />} />
          <Route path="subscription" element={<LikeVediosPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="downloads" element={<LibraryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
