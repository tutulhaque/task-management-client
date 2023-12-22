import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();

            if (responseData.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Task added Successfully.',
                    icon: 'success',
                    confirmButtonText: 'Close'
                });
                navigate('/dashboard/do-list');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto bg-[#f7f7f7] p-10">
                <h1 className="text-4xl font-extrabold">Add Task</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Row-01 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input {...register('title', { required: true })} type="text" className="input input-bordered w-full" />
                            </label>
                            {errors.title && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Task Priority</span>
                            </label>
                            <select {...register('priority', { required: true })} className="select w-full">
                                <option value="">Select task priority</option>
                                <option value="high">High</option>
                                <option value="moderate">Moderate</option>
                                <option value="low">Low</option>
                            </select>
                            {errors.priority && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>
                    {/* Row-02 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input {...register('description', { required: true })} type="text" className="input input-bordered w-full" />
                            </label>
                            {errors.description && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Deadlines</span>
                            </label>
                            <label className="input-group">
                                <input {...register('deadline', { required: true })} type="text" className="input input-bordered w-full" />
                            </label>
                            {errors.deadline && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Add Task" className="btn btn-neutral" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
