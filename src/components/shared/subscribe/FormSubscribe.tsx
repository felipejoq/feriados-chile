import React, { useRef, useEffect } from "react";

interface FormSubscribeProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FormSubscribe: React.FC<FormSubscribeProps> = ({ isOpen, onClose }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        console.log(name, email);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>}
            <dialog ref={dialogRef} className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-xl mb-4">Alerta de Feriados por Correo</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Nombre"
                            type="name"
                            id="name"
                            name="name"
                            required
                            className="mb-4 p-2 border rounded w-full block"
                        />
                        <input
                            placeholder="Correo electrónico"
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mb-4 p-2 border rounded w-full block"
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                            Recibir por email
                        </button>
                        <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
                            Cerrar
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};