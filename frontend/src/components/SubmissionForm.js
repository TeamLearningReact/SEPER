import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm({
        mode: 'onBlur',
    });
    const [result, setResult] = useState("");

    const onSubmit = (values) => console.log(values);

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p><label>
                    Title*
                    <p><input 
                        {...register("title", { required: "Title is required." })} placeholder="Title" />
                        {errors.title && <span>{errors.title.message}</span>}</p>
                </label></p>
                <p><label>
                    Author*
                    <p><input 
                    {...register("author", { required: "Author is required." })} placeholder="Author" />
                    {errors.author && <span>{errors.author.message}</span>}</p>
                </label></p>
                <p><label>
                    Published Year*
                    <p><input 
                    {...register("year", { required: "Published year is required." })} placeholder="Year" />
                    {errors.year && <span>{errors.year.message}</span>}</p>
                </label></p>
                <p><label>
                    Source
                    <p><input 
                    {...register("source")} placeholder="Source" /></p>
                </label></p>
                <p><label>
                    DOI
                    <p><input 
                    {...register("doi")} placeholder="DOI" /></p>
                </label></p>
                <p><select {...register("sepractice")}>
                    <option value="">Select SE practice...</option>
                    <option value="TDD">TDD</option>
                    <option value="Mob Programming">Mob Programming</option>
                </select></p>
                <p>{result}</p>
                <p><button type="submit">Submit Article</button></p>
            </form>

        </div>
        
    );

}

export default SubmissionForm;
