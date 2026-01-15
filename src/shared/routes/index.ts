export const ROUTES = {
    HOME: "/",
    GENDER_REVEAL: "/gender-reveal",
    NATIONALITY_REVEAL: "/nationality-reveal",
    PROFILE: "/profile",
    COUNTER: "/",
    ABOUT: "/about",
    NOT_FOUND: "*",
    PRODUCT: (id: string | number) => `/products/${id}`,
    USERS: "/users",
    USER: (id: string | number) => `/users/${id}`,
} as const;