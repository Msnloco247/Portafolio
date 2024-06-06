
const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} className="work__img"></img>
        <h3 className="work__title">{item.title}</h3>
        <p className="">{item.description}</p>
        <a href={item.link} className="work__button">
            GitHub <i className="bx bx-right-arrow-alt work__button-icon">
                
            </i>
        </a>
    </div>    
)
}

export default WorksItems