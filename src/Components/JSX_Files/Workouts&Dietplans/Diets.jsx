import React from 'react'
import '../../CSS_Files/Diets.css'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Diets = ({ diets }) => {
  return (
    <>
      <div className="diets">
        <div className="dietsContainer">
          <h2>Monday</h2>
          <table>
            <tr>
              <th>Meals</th>
              {diets.map((item) => (
                <th>{item.type}</th>
              ))}
            </tr>
            <tr>
              <th>Breakfast</th>
              {diets.map((item) => (
                <td>{item.breakfast}</td>
              ))}
            </tr>
            <tr>
              <th>Morning Snack</th>
              {diets.map((item) => (
                <td>{item.morningSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Lunch</th>
              {diets.map((item) => (
                <td>{item.lunch}</td>
              ))}
            </tr>
            <tr>
            <th>Afternoon Snack</th>
              {diets.map((item) => (
                <td>{item.afternoonSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Dinner</th>
              {diets.map((item) => (
                <td>{item.dinner}</td>
              ))}
            </tr>
          </table>


          <h2>Tuesday</h2>
          <table>
            <tr>
              <th>Breakfast</th>
              {diets.map((item) => (
                <td>{item.breakfast}</td>
              ))}
            </tr>
            <tr>
              <th>Morning Snack</th>
              {diets.map((item) => (
                <td>{item.morningSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Lunch</th>
              {diets.map((item) => (
                <td>{item.lunch}</td>
              ))}
            </tr>
            <tr>
            <th>Afternoon Snack</th>
              {diets.map((item) => (
                <td>{item.afternoonSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Dinner</th>
              {diets.map((item) => (
                <td>{item.dinner}</td>
              ))}
            </tr>
          </table>
          <h2>Wednesday</h2>
          <table>
            <tr>
              <th>Breakfast</th>
              {diets.map((item) => (
                <td>{item.breakfast}</td>
              ))}
            </tr>
            <tr>
              <th>Morning Snack</th>
              {diets.map((item) => (
                <td>{item.morningSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Lunch</th>
              {diets.map((item) => (
                <td>{item.lunch}</td>
              ))}
            </tr>
            <tr>
            <th>Afternoon Snack</th>
              {diets.map((item) => (
                <td>{item.afternoonSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Dinner</th>
              {diets.map((item) => (
                <td>{item.dinner}</td>
              ))}
            </tr>
          </table>
          <h2>Thursday</h2>
          <table>
            <tr>
              <th>Breakfast</th>
              {diets.map((item) => (
                <td>{item.breakfast}</td>
              ))}
            </tr>
            <tr>
              <th>Morning Snack</th>
              {diets.map((item) => (
                <td>{item.morningSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Lunch</th>
              {diets.map((item) => (
                <td>{item.lunch}</td>
              ))}
            </tr>
            <tr>
            <th>Afternoon Snack</th>
              {diets.map((item) => (
                <td>{item.afternoonSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Dinner</th>
              {diets.map((item) => (
                <td>{item.dinner}</td>
              ))}
            </tr>
          </table>
          <h2>Friday</h2>
          <table>
            <tr>
              <th>Breakfast</th>
              {diets.map((item) => (
                <td>{item.breakfast}</td>
              ))}
            </tr>
            <tr>
              <th>Morning Snack</th>
              {diets.map((item) => (
                <td>{item.morningSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Lunch</th>
              {diets.map((item) => (
                <td>{item.lunch}</td>
              ))}
            </tr>
            <tr>
            <th>Afternoon Snack</th>
              {diets.map((item) => (
                <td>{item.afternoonSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Dinner</th>
              {diets.map((item) => (
                <td>{item.dinner}</td>
              ))}
            </tr>
          </table>
          <h2>Saturday</h2>
          <table>
            <tr>
              <th>Breakfast</th>
              {diets.map((item) => (
                <td>{item.breakfast}</td>
              ))}
            </tr>
            <tr>
              <th>Morning Snack</th>
              {diets.map((item) => (
                <td>{item.morningSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Lunch</th>
              {diets.map((item) => (
                <td>{item.lunch}</td>
              ))}
            </tr>
            <tr>
            <th>Afternoon Snack</th>
              {diets.map((item) => (
                <td>{item.afternoonSnack}</td>
              ))}
            </tr>
            <tr>
            <th>Dinner</th>
              {diets.map((item) => (
                <td>{item.dinner}</td>
              ))}
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Diets;
