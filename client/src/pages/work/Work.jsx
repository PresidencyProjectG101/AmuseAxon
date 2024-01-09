import { useEffect } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
// import { WorkoutsContextProvider } from "../../context/WorkoutsContext";
// components
import { useSelector } from "react-redux";
import WorkoutDetails from "../../compo/WorkoutDetails";
import WorkoutForm from "../../compo/WorkoutForm";

const Work = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchWorkouts = async () => {
      // const response = await fetch("/workouts");
      const response = await fetch("/workouts", {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      // .then(function (respons) {
      //   console.log(respons)
      
      // });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="homee">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Work;