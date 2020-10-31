const routes = {
    // Global
    HOME: "/",
    JOIN: "/join",
    LOGIN: "/login",
    LOGOUT: "/logout",
    SEARCH: "/search",

    // Users
    USERS: "/users",
    USER_DETAIL: (id) => {
        if (id) {
            return `/users/${id}`;
        } else {
            return `/:id`;
        }
    },
    EDIT_PROFILE: "/edit-profile",
    CHANGE_PASSWORD: "/change-password",

    // Videos
    VIDEOS: "/videos",
    VIDEO_DETAIL: (id) => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return `/:id`;
        }
    },
    UPLOAD: "/upload",
    EDIT_VIDEO: (id) => {
        if(id) {
            return `/videos/${id}/edit`;
        } else {
            return `/:id/edit`;
        }
    },
    DELETE_VIDEO: (id) => {
        if(id) {
            return `/${id}/delete`;
        } else {
            return "/:id/delete";
        }
    },
} 

export default routes;