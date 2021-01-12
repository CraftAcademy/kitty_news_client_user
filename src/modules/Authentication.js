import axios from "axios"

const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL
});

const signUp = () => {
  auth
    .signUp(
    {
      email: "john-doe@gmail.com",
      password: "myP@ssw0ord!",
      avatarUrl: "www.image.com/picture.jpg"
    },
    "www.url-after-confirmation.com"
  )
  .catch(error => {
    console.log(error);
  });
}

export {signUp}

