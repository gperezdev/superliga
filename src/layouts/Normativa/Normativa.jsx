import styles from './Normativa.module.css'

export const Normativa = () => (
    <main className={styles['normativa']}>
        <div className={styles['wrapper']}>
            <p className={styles['season']}>TEMPORADA 26-27</p>
            <h1 className={styles['title']}>NORMATIVA</h1>
            <div className={styles['document']}>
                <section className={styles.section}>
                    <h2>1. CALENDARIO Y HORARIOS</h2>
                    <h3>A. FORMATO LIGA</h3>
                    <p>La liga será a ida y vuelta, sumando un total de 22 jornadas.</p>
                    <p style={{ fontWeight: 'bold' }}>Empezará el lunes 7 de septiembre y terminará el domingo 2 de mayo.</p>
                    <p>Los enfrentamientos consistirán en que los 12 jugadores jugarán 2 veces contra cada uno de los demás integrantes. <span style={{ fontWeight: 'bold' }}>(22 JORNADAS)</span></p>

                    <h3 style={{ marginTop: '20px' }}>B. FORMATO COPA</h3>
                    <p style={{ fontWeight: 'bold' }}>Empezará el lunes 23 de noviembre y terminará antes del domingo 13 de diciembre.</p>
                    <p>Los emparejamientos se harán mediante sorteo puro, divididos en 4 grupos, y las parejas serán las mismas hasta finalizar el torneo. Los 4 primeros clasificados se saltarán una ronda e irán al <span style={{ fontWeight: 'bold' }}>BOMBO 0</span>. Los otros 8 integrantes se ordenarán mediante sorteo puro, divididos en 2 bombos: del 5.º al 8.º serán el <span style={{ fontWeight: 'bold' }}>BOMBO 1</span> y del 9.º al 12.º, el <span style={{ fontWeight: 'bold' }}>BOMBO 2</span>. El orden de las parejas para los <span style={{ fontWeight: 'bold' }}>CUARTOS DE FINAL</span> será el siguiente:</p>
                    <p style={{ fontWeight: 'bold' }}>JUGADOR BOMBO 1 + BOMBO 2 VS JUGADOR BOMBO 1 + BOMBO 2</p>
                    <p>En semifinales, se hará otro sorteo para ordenar el <span style={{ fontWeight: 'bold' }}>BOMBO 0</span> con los clasificados de los <span style={{ fontWeight: 'bold' }}>CUARTOS DE FINAL</span>. El orden será el siguiente:</p>
                    <p style={{ fontWeight: 'bold' }}>JUGADOR BOMBO 0 + CLASIFICADO DE CUARTOS VS JUGADOR BOMBO 0 + CLASIFICADO DE CUARTOS</p>

                    <h3 style={{ marginTop: '20px' }}>C. FORMATO PLAYOFFS</h3>
                    <p style={{ fontWeight: 'bold' }}>Empezará el lunes 3 de mayo y terminará antes del domingo 23 de mayo.</p>
                    <p>Este formato se jugará en ambos grupos de la liga por separado. Las parejas serán las mismas hasta finalizar el torneo. Sin embargo, antes de comenzar, habrá un formato de <span style={{ fontWeight: 'bold' }}>PLAY-IN</span>, en el que el 7.º y 8.º clasificados jugarán contra el 9.º y 10.º clasificados para entrar en los <span style={{ fontWeight: 'bold' }}>PLAYOFFS</span>. El orden final será el siguiente:</p>
                    <p style={{ fontWeight: 'bold' }}>1.er CLASIFICADO + 2.º CLASIFICADO VS 7.º CLASIFICADO + 8.º CLASIFICADO</p>
                    <p style={{ fontWeight: 'bold' }}>3.er CLASIFICADO + 4.º CLASIFICADO VS 5.º CLASIFICADO + 6.º CLASIFICADO</p>

                </section>

                <section className={styles.section}>
                    <h2>2. SISTEMA DE JUEGO</h2>
                    <p>- El calentamiento deberá empezar a la hora exacta del partido y tendrá una duración de 10 minutos.</p>
                    <p>- El partido será al mejor de 3 SETS, con una diferencia de 2 juegos. No habrá punto de oro.</p>
                    <p>- Habrá un 4.º y 5.º SET EXTRA para sumar puntos adicionales.</p>
                    <p>- En caso de empate a 6 JUEGOS, habrá TIE-BREAK al mejor de 7 puntos, sin diferencia de dos.</p>
                    <p>- Cada 3 JUEGOS se realizará un cambio de pista.</p>
                    <p>- A la hora de finalizar el partido, si hay un juego en marcha, se deberá completar. Sin embargo, si hay empate, se deberá decidir el partido con un JUEGO adicional de desempate.</p>
                </section>

                <section className={styles.section}>
                    <h2>3. MÉTODOS DE PUNTUACIÓN</h2>
                    <p>- Los partidos se jugarán al mejor de <span style={{ fontWeight: 'bold' }}>3 SETS + PUNTOS EXTRA (MÁX. 5 SETS)</span>.</p>
                    <p>- <span style={{ fontWeight: 'bold' }}>PRIMER SET</span>: los ganadores se llevan 1 punto y los perdedores, 0 puntos.</p>
                    <p>- <span style={{ fontWeight: 'bold' }}>SEGUNDO SET</span>: los ganadores se llevan 1 punto y los perdedores, 0 puntos.</p>
                    <p>- <span style={{ fontWeight: 'bold' }}>TERCER SET</span>: los ganadores se llevan 1 punto y los perdedores, 0 puntos. Si el partido ya ha finalizado con un 2-0, los ganadores se llevan 0,4 puntos y los perdedores, 0 puntos.</p>
                    <p>- <span style={{ fontWeight: 'bold' }}>CUARTO SET</span>: los ganadores se llevan 0,4 puntos y los perdedores, 0 puntos. Si en el SET no se han jugado 5 o más juegos, los ganadores se llevan 0,2 puntos y los perdedores, 0 puntos.</p>
                    <p>- <span style={{ fontWeight: 'bold' }}>QUINTO SET</span>: los ganadores se llevan 0,4 puntos y los perdedores, 0 puntos. Si en el SET no se han jugado 5 o más juegos, los ganadores se llevan 0,2 puntos y los perdedores, 0 puntos.</p>
                </section>

                <section className={styles.section}>
                    <h2>4. CLASIFICACIÓN DE LA LIGA</h2>
                    <p>- Cada jugador puntuará de manera individual.</p>
                    <p>- En caso de empate doble o triple, el jugador que haya ganado más enfrentamientos directos quedará por delante.</p>
                    <p>- Los dos últimos clasificados de cada división, al finalizar la temporada, deberán invitar a una ronda el día de la cena final de temporada.</p>
                </section>

                <section className={styles.section}>
                    <h2>5. RESERVAS Y NORMAS PREPARTIDO</h2>
                    <p>- La pareja local siempre deberá reservar la pista y llevar bolas en buen estado al partido. En caso de que no pueda hacerlo, deberá buscar a alguien que lo haga por ella, previo aviso. En caso contrario, se les dará el partido por perdido y al resto de jugadores de ese partido se les dará el partido por ganado con <span style={{ fontWeight: 'bold' }}>2 puntos</span>.</p>
                    <p>- A la hora de reservar, si la pareja local no ha podido hacerlo, deberá avisar en el grupo, como tarde, a las 00:15 h de esa noche. Si avisa más tarde, al jugador local que no haya realizado la reserva se le dará el partido por perdido y a los demás se les otorgarán 2 puntos, a no ser que haya un consenso entre todos los integrantes del partido.</p>
                    <p>- El día y la hora del partido siempre se acordarán entre los jugadores que vayan a disputar el partido antes de comenzar la semana correspondiente (es decir, se deberá acordar, como tarde, el domingo de la semana anterior). En caso de que no haya consenso entre todos, el partido se disputará en el día y la hora en los que haya mayor disponibilidad por parte de los jugadores esa semana, y la persona afectada deberá buscar un sustituto.</p>
                    <p>- Los partidos siempre se deberán jugar entre semana y los fines de semana se jugarán de forma excepcional.</p>
                    <p>- El adelanto de partidos se podrá hacer siempre y cuando todos los jugadores puedan disputarlo. En caso contrario, se jugará durante la semana en la que corresponda disputarlo.</p>
                    <p>- Si una persona no puede jugar su partido, deberá buscar un sustituto de un nivel parecido al suyo o inferior dentro de la bolsa de reservas (nunca podrá escoger a alguien de nivel superior). En caso de que no se cumpla esta norma, la pareja rival podrá reclamar el partido. Si juega un sustituto, la persona que no haya jugado recibirá la mitad de los puntos obtenidos.</p>
                    <p>- Si no hay un sustituto para el partido, la persona que no pueda jugar recibirá 0 puntos y los demás jugadores recibirán 2 puntos.</p>
                </section>

                <section className={styles.section}>
                    <h2>6. INCIDENCIAS DURANTE EL PARTIDO</h2>
                    <p>- Si un jugador llega <span style={{ fontWeight: 'bold' }}>20 minutos tarde</span>, se le dará el partido por perdido y los demás jugadores obtendrán <span style={{ fontWeight: 'bold' }}>2 puntos</span>.</p>
                    <p>- Si un jugador se lesiona durante el partido y este ya ha finalizado (<span style={{ fontWeight: 'bold' }}>MEJOR DE 3 SETS</span>), el resultado será el que hubiera en ese momento. En cambio, si el partido no ha finalizado, el jugador lesionado recibirá la puntuación obtenida hasta ese momento y el resto de jugadores recibirán <span style={{ fontWeight: 'bold' }}>2 puntos</span>.</p>
                    <p>- Si empieza a llover durante el partido y este ya ha finalizado (<span style={{ fontWeight: 'bold' }}>MEJOR DE 3 SETS</span>), el resultado será el que hubiera en ese momento. En cambio, si el partido no ha finalizado, se podrá reanudar en un plazo máximo de <span style={{ fontWeight: 'bold' }}>una semana</span>, ya sea en pista <span style={{ fontWeight: 'bold' }}>indoor</span> o <span style={{ fontWeight: 'bold' }}>outdoor</span>.</p>
                </section>

                <section className={styles.section}>
                    <h2>7. SANCIONES</h2>
                    <p>- Si un jugador no reserva la pista como local ni lleva bolas en buen estado: <span style={{ fontWeight: 'bold' }}>PARTIDO PERDIDO</span>.</p>
                    <p>- Si un jugador avisa de que no puede jugar con un margen inferior a <span style={{ fontWeight: 'bold' }}>2 HORAS</span> antes del partido: <span style={{ fontWeight: 'bold' }}>PARTIDO PERDIDO</span>.</p>
                    <p>- Si un jugador avisa con antelación, pero no consigue un sustituto: <span style={{ fontWeight: 'bold' }}>PARTIDO PERDIDO</span>.</p>
                    <p>- Si un jugador llega <span style={{ fontWeight: 'bold' }}>20 MINUTOS TARDE</span> a la hora de inicio del partido: <span style={{ fontWeight: 'bold' }}>PARTIDO PERDIDO</span>.</p>
                    <p>- Si un jugador se va antes de que termine el partido: <span style={{ fontWeight: 'bold' }}>PARTIDO PERDIDO</span>.</p>
                </section>

                <section className={styles.section}>
                    <h2>8. BOLSA DE RESERVAS</h2>
                    <p>Cuando alguien no pueda jugar su partido, tendrá que conseguir un sustituto de esta bolsa de reservas, dependiendo de cómo esté en la clasificación en ese momento.</p>
                    <p style={{ fontWeight: 'bold' }}>CATEGORÍA ORO (del 1.º al 4.º clasificado)</p>
                    <p style={{ fontWeight: 'bold' }}>CATEGORÍA PLATA (del 5.º al 8.º clasificado)</p>
                    <p style={{ fontWeight: 'bold' }}>CATEGORÍA BRONCE (del 9.º al 12.º clasificado)</p>
                    <p>Para consultar los datos de contacto de los sustitutos disponibles, se deberá consultar el <span style={{ fontWeight: 'bold' }}>grupo interno de la liga</span>.</p>
                </section>
                
            </div>

        </div>
    </main>
)