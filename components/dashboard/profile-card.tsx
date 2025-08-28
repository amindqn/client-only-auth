"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

type Props = {
    name: string;
    email: string;
    phone: string;
    picture?: string;
};

export default function ProfileCard({ name, email, phone, picture }: Props) {
    const [imgError, setImgError] = useState(false);

    return (
        <Card className="md:col-span-5">
            <CardContent className="p-4">
                <div className="flex items-center gap-4">
                    {picture && !imgError ? (
                        <Image
                            src={picture}
                            alt={name}
                            width={72}
                            height={72}
                            className="h-18 w-18 rounded-full object-cover shadow"
                            priority
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="h-18 w-18 rounded-full bg-[var(--primary)] opacity-90" />
                    )}

                    <ul className="text-sm space-y-0.5">
                        <li>
                            <strong>نام:</strong> {name}
                        </li>
                        <li>
                            <strong>ایمیل:</strong> {email}
                        </li>
                        <li>
                            <strong>موبایل:</strong> {phone}
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}
