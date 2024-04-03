import Jwt from 'jsonwebtoken';
 
interface DecodedToken {
    data: string; // Assuming 'user_id' is the key for user ID in the payload
    // Add more properties if needed based on your JWT payload structure
}
 
const extractUserIdFromToken=(token: string): string | null=> {
    try {
        // Decode the token (without verifying signature)
        const t=token.split(" ")
        const to=t[1];
        const decodedToken = Jwt.decode(to) as DecodedToken;
        // Extract user ID from the decoded token's payload
        const data = decodedToken.data;
        console.log(data);
        return data;
    } catch (error:any) {
        // Handle token decoding errors
        console.error('Error decoding token:', error.message);
        return null;
    }
}

export default extractUserIdFromToken;
 