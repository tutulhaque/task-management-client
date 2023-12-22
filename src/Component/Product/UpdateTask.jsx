import { Navigate, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTask = () => {
    const singleTask = useLoaderData();
    const { _id, title, priority, description, deadline } = singleTask;
    const navigate = useNavigate();

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const priority = form.priority.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const updatedProduct = { title, priority, deadline, description }
        console.log(updatedProduct)
        fetch(`http://localhost:5000/task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                    navigate('/dashboard/do-list');
                }

            })

    }
    return (
        <div>
            <div className="max-w-7xl mx-auto bg-[#f7f7f7] p-10">
                <h1 className="text-4xl font-extrabold">Update Task</h1>
                <form onSubmit={handleUpdateProduct}>
                    {/* Row-01 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" defaultValue={title} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Task Priority</span>
                            </label>
                            <select name="priority" className="select w-full" defaultValue={priority}>
                                <option disabled selected>Select Task Priority</option>
                                <option value="high">High</option>
                                <option value="moderate">Moderate</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>
                    {/* Row-02 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="deadline" defaultValue={deadline} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                   
                    <div className="flex justify-center">
                        <input type="submit" value="Update Task" className="btn btn-neutral" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;