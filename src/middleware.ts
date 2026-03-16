import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/admin/login",
    },
});

export const config = {
    matcher: [
        "/admin",
        "/admin/bookings/:path*",
        "/admin/services/:path*",
        "/admin/gallery/:path*"
    ],
};
