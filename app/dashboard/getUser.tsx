'use client';

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserNameDisplay() {
    const { data: session, status } = useSession();
    
    if (status === "loading") {
        return <div>Loading...</div>;
    }
    
    if (status === "unauthenticated") {
        return <div>You are not logged in.</div>;
    }
    
    if (!session || !session.user || !session.user.name) {
        return <div>User name not found.</div>;
    }
    
    return (
        <div className="flex items-center">
            <div className="flex items-center">
                <Image
                src='/user-profile/japs.png'
                className="mr-2 rounded-full"
                width={38}
                height={38}
                alt='profile picture'
                />
                <div className="flex flex-col">
                <span>{session.user.name}</span>
                <span>{session.user.email}</span>
                </div>
            </div>
        </div>
    );
    }