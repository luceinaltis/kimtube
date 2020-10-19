const routes = {
    // Global
    HOME: "/",
    JOIN: "/join",
    LOGIN: "/login",
    LOGOUT: "/logout",
    SEARCH: "/search",

    // Users
    USERS: "/users",
    USERS_DETAIL: "/:id",
    EDIT_PROFILE: "/edit-profile",
    CHANGE_PASSWORD: "/change-password",

    // Videos
    VIDEOS: "/videos",
    VIDEO_DETAIL: "/:id",
    UPLOAD: "/upload",
    EDIT_VIDEO: "/:id/edit",
    DELETE_VIDEO: "/:id/delete",
} 

export default routes;