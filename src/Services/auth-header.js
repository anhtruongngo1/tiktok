export default function authHeader() {
    const user = localStorage.getItem("user");
    console.log('check token' , user);

    if (user) {
        // For Spring Boot back-end
        return {Authorization : "Bearer" + user};

        // for Node.js Express back-end
        // return { "x-access-token": user };
    } else {
        return {};
    }
}