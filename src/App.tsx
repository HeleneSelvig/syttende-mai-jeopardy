import Category from "./components/category/Category"
import ResetButton from "./components/resetButton/ResetButton"
import * as ChallengeLists from "./components/challenge/ChallengeLists"
import './App.css'

export default function App() {
  return (
    <>
      <div className="header-container">
        <h1 className="header">17. mai jeopardy!</h1>

        <div className="resetButton-container">
          <ResetButton />
        </div>
      </div>

      <div className="app-container">
        {[
          "Musikk",
          "Sport",
          "Kultur",
          "Mysterie",
          "Alko"
        ].map(
          (title, i) => {
            const challenges_list = [
              ChallengeLists.musikk_challenges,
              ChallengeLists.sport_challenges,
              ChallengeLists.kultur_challenges,
              ChallengeLists.mysterie_challenges,
              ChallengeLists.alko_challenges
            ];
            return (
              <>
                <Category text={title} challenges={challenges_list[i]} />
              </>
            )
          }
        )}
        <div className="points-category">
          <h2>Poeng</h2>
          <div className="points-container">
            {[{
              id: 1,
            }, {
              id: 2,
            }].map((team) =>
              <div className="points-slots">
                <h3>Team {team.id}</h3>
                <input type="text" name={`team${team.id}`} id={`team${team.id}`} />
              </div>)}
          </div>
        </div>
      </div>

    </>
  )
}
