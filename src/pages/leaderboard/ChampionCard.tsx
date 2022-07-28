import Challenge from "../../features/challenge/models/Challenge";

function ChampionCard(props: Challenge) {
    return (
        <article className="border border-primary rounded w-full px-3 divide-y divide-primary">
            <h2 className="p-1 py-2 capitalize">{props.specialty}</h2>
            <div className="p-3">
                <p>Champion : {props.champion} </p>
                <p>Challenges won : {props.winstreak}</p>
            </div>
        </article>
    );
}

export default ChampionCard;
