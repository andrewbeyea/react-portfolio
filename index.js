function App(){
    const [data,setData] = React.useState(null);
    const [loaded,setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./projects.json');
            const json = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    }, []);
    console.log('loaded: ',loaded, ' data: ', data);
    return (
        <div className="container"> 
            <h1>Portfolio</h1>
            {loaded && data.projects.map((project,i) => <Project data={project} key={i}/>)} 
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('root'))