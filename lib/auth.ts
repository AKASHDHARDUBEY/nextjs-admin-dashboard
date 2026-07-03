import bcrypt from "bcryptjs";
import * as jose from "jose";

const secret = new TextEncoder().encode(
    process.env.JWT_SECRET
);

export async function hashPassword(password: string) {
    return bcrypt.hash(password, 10);
}
export async function comparePassword(
    password: string,
    hash: string
) {
    return bcrypt.compare(password, hash);
}

export async function createToken(data: {
    id: string;
    email: string;
}) {
    return new jose.SignJWT(data)
        .setProtectedHeader({
            alg: "HS256",
        })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret);

}
export async function verifyToken(token: string) {
    try {
        const { payload } = await jose.jwtVerify(
            token,
            secret
        );
        return payload;
    } catch {
        return null;
    }
}