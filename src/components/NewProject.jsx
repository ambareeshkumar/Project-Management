import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject ({onAdd, onCancel}){

    const modal = useRef();

    const title = useRef();
    const desc = useRef();
    const dueDate = useRef();

    const handleSave = ()=>{
        const enteredTitle = title.current.value;
        const enteredDescription = desc.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim( )=== '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title:enteredTitle,
            desc:enteredDescription,
            dueDate:enteredDueDate
        })
    }

    return (
        <>
            <Modal  ref={modal} buttonCaption = {'okay'}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mt-4" >oops... you have entered an invalid input</p>
                <p className="text-stone-600 mt-4" >Please enter the correct input</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel }>Cancel</button>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
                </menu>
                <div>
                    <Input type = "text" ref = {title} label = 'Title' />
                    <Input ref = {desc} label= 'Description' textArea/>
                    <Input type = "Date" ref = {dueDate} label="Due Date"/>
                </div>
            </div>
        </>
    );
}