import { GotCharacters } from "../types/gotCharacters";

export function Card(item: GotCharacters): any {
  return (
    <>
      <li className="character col">
        <div className="card character__card">
          <img
            src={`img/${item.name.toLowerCase()}.jpg`}
            alt={item.name}
            className="character__picture card-img-top"
          />
          <div className="card-body">
            <h2 className="character__name card-title h4">
              {item.name} {item.house}
            </h2>
            <div className="character__info">
              <ul className="list-unstyled">
                <li>Edad: {item.age}</li>
                <li>
                  Estado:
                  <i className="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div className="character__overlay">
              <div className="character__actions">
                <button
                  data-id={item.name}
                  className="character__action btn speak"
                >
                  Di tu frase.
                </button>
                <button
                  data-id={item.name}
                  className="character__action btn die"
                >
                  Matar
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
