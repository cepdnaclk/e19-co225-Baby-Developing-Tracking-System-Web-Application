import PostService from "./services/post.service";

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
      {/* {privatePosts.map((post) => (
        <p>{post}</p>
      ))} */}
    </div>
  );
};
