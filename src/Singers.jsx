export default function Singers({singers}) {
    console.log(singers);
    return (
        <div>
            <h3>Singers:{singers.name} </h3>
            <p>Age:{singers.roll} </p>
        </div>
    );
}