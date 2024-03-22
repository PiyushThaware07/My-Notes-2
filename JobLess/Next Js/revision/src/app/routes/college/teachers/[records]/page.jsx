import studentsList from "../studentsList.json";

export default function page({ params }) {
    const filterStudent = studentsList.find(item => item.id === parseInt(params.records));
    return (
        <div className="w-full h-full bg-slate-100 rounded-lg p-5">
            <h1 className="text-md font-semibold">Display Student Record</h1>
            <hr />
            <div className="p-6">
                <h1>First Name : {filterStudent?.fname}</h1>
                <h1>Last Name : {filterStudent?.lname}</h1>
                <h1>Email Address : {filterStudent?.email}</h1>
                <h1>Age : {filterStudent?.age}</h1>
            </div>
        </div>
    )
}
