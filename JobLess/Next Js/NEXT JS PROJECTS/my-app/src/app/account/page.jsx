import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

export default async function Account(request) {
    const session = await getServerSession(authOptions);
    const desiredUsername = request.searchParams?.desiredUsername;
    if (!session) {
        redirect("/");
    }
    return (
        <div>
            account :  {session?.user?.name}
            <br />
            desired Username : {desiredUsername}
        </div>
    )
}
