import PostService from "./services/post.service";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Home = () => {
  // useEffect(() => {
  //   PostService.getAllPrivatePosts().then(
  //     (res) => {
  //       setPrivatePosts(res.data);
  //       console.log("response", res);
  //     },
  //     (err) => {
  //       console.log("private page", err.res);
  //     }
  //   );
  // });

  return (
    <div>
      <Nav />
      {/* {privatePosts.map((post) => (
        <p>{post}</p>
      ))} */}
      <Footer />
    </div>
  );
};
