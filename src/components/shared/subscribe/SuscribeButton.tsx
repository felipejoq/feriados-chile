import React, { useState } from "react";
import { FormSubscribe } from "@components/shared/subscribe/FormSubscribe";

export const SubscribeButton: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div>
            <button
                onClick={handleOpenDialog}
                className="fixed bottom-4 right-4 bg-gray-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
                📩 Feriados por correo
            </button>
            <FormSubscribe isOpen={isDialogOpen} onClose={handleCloseDialog} />
        </div>
    );
};