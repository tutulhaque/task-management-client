import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const List = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const toDoList = async () => {
            try {
                const response = await fetch(`http://localhost:5000/tasks`);
                const data = await response.json();
                setLists(data);
                console.log(data); // Log the fetched data here for immediate feedback
            } catch (error) {
                console.error(error);
            }
        };

        toDoList();
    }, []);

    // Implement delete functionality
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete-task/${_id}`,{
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            console.log("deleted");
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = lists.filter(item => item._id !== _id);
                            setLists(remaining);

                        }
                    })
            }
        })

    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Task Priority</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            lists.map(list =>
                                <>
                                    <tr key={list._id}>
                                        <th>1</th>
                                        <td>{list.title}</td>
                                        <td>{list.priority}</td>
                                        <td>{list.description.slice(0, 100)}.....</td>
                                        <td>{list.deadline}</td>
                                        <td>
                                        <button onClick={()=>handleDelete(list?._id)} className="btn btn-ghost btn-xs text-red-500">X</button>
                                        <Link to={`/update-product/${list._id}`}><button className="btn btn-neutral btn-xs text-white-500">update</button></Link>
                                        </td>
                                    </tr>
                                </>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default List;