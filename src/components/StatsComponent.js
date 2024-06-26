import React from 'react'
import playerplaceholder from '../resources/playerplaceholder.png'

function Stats (){
    return(
        <div>
            <section class="page stats">
                <h2>Our Players</h2>
                <div class="player">
                    <h3>Player One</h3>
                    <img src={playerplaceholder} alt="player 1 placeholder"/>
                    <table>
                        <tr>
                            <th>Position</th>
                            <td>Lead</td>
                        </tr>
                        <tr>
                            <th>One-Liners</th>
                            <td>37</td>
                        </tr>
                        <tr>
                            <th>Slapstick</th>
                            <td>42</td>
                        </tr>
                        <tr>
                            <th>Overdramatisations</th>
                            <td>15</td>
                        </tr>
                        <tr>
                            <th>Clowning</th>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th>Flops</th>
                            <td>34</td>
                        </tr>
                    </table>
                </div>
                <div class="player">
                    <h3>Player Two</h3>
                    <img src={playerplaceholder} alt="player 2 placeholder"/>
                    <table>
                        <tr>
                            <th>Position</th>
                            <td>Supporting</td>
                        </tr>
                        <tr>
                            <th>One-Liners</th>
                            <td>42</td>
                        </tr>
                        <tr>
                            <th>Slapstick</th>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th>Overdramatisations</th>
                            <td>60</td>
                        </tr>
                        <tr>
                            <th>Clowning</th>
                            <td>53</td>
                        </tr>
                        <tr>
                            <th>Flops</th>
                            <td>21</td>
                        </tr>
                    </table>
                </div>
                <div class="player">
                    <h3>Player Three</h3>
                    <img src={playerplaceholder} alt="player 3 placeholder"/>
                    <table>
                        <tr>
                            <th>Position</th>
                            <td>Sidekick</td>
                        </tr>
                        <tr>
                            <th>One-Liners</th>
                            <td>43</td>
                        </tr>
                        <tr>
                            <th>Slapstick</th>
                            <td>23</td>
                        </tr>
                        <tr>
                            <th>Overdramatisations</th>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th>Clowning</th>
                            <td>70</td>
                        </tr>
                        <tr>
                            <th>Flops</th>
                            <td>43</td>
                        </tr>
                    </table>
                </div>
                <div class="player">
                    <h3>Player Four</h3>
                    <img src={playerplaceholder} alt="player 4 placeholder"/>
                    <table>
                        <tr>
                            <th>Position</th>
                            <td>Brains</td>
                        </tr>
                        <tr>
                            <th>One-Liners</th>
                            <td>32</td>
                        </tr>
                        <tr>
                            <th>Slapstick</th>
                            <td>54</td>
                        </tr>
                        <tr>
                            <th>Overdramatisations</th>
                            <td>21</td>
                        </tr>
                        <tr>
                            <th>Clowning</th>
                            <td>87</td>
                        </tr>
                        <tr>
                            <th>Flops</th>
                            <td>14</td>
                        </tr>
                    </table>
                </div>
                <div class="player">
                    <h3>Player Five</h3>
                    <img src={playerplaceholder} alt="player 5 placeholder"/>
                    <table>
                        <tr>
                            <th>Position</th>
                            <td>Comic Relief</td>
                        </tr>
                        <tr>
                            <th>One-Liners</th>
                            <td>95</td>
                        </tr>
                        <tr>
                            <th>Slapstick</th>
                            <td>32</td>
                        </tr>
                        <tr>
                            <th>Overdramatisations</th>
                            <td>70</td>
                        </tr>
                        <tr>
                            <th>Clowning</th>
                            <td>35</td>
                        </tr>
                        <tr>
                            <th>Flops</th>
                            <td>24</td>
                        </tr>
                    </table>
                </div> 
            </section>
        </div>
    )
}

export default Stats