// props là một đối tượng chứa tất cả các thuộc tính được truyền vào component
// props có thể được sử dụng để truyền dữ liệu từ component cha xuống component con, giúp cho việc tái sử dụng component trở nên dễ dàng hơn


function Student(props) {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student;