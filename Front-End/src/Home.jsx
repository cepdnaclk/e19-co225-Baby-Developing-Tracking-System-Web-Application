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
      <div className="relative  my-16 mx-3 rounded-lg p-4 flex-row">
          <h1 className="header text-center font-[900] text-4xl">SPROUTOPIA</h1>
          <h3 className="subheader text-center font-[500] text-2xl">Nutering Smiles, Shaping Futures</h3>

          
      </div>
      
      {/* {privatePosts.map((post) => (
        <p>{post}</p>
      ))} */}
      <Footer />
    </div>
  );
};
