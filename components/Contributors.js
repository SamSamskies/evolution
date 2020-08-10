import styles from './css/Contributors.module.css';

export default function Contributors() {
  /* 
  
  Add your name and Github here! 
  
  */
  const people = [
    { name: "Sam", githubLink: "https://github.com/SamSamskies" },
    { name: "Mark", githubLink: "https://github.com/MarkWillisford" },
    { name: "Levon", githubLink: "https://github.com/itfibonacci" },
    { name: "Karen", githubLink: "https://github.com/karleee" },
    { name: "James", githubLink: "https://github.com/ngjamesng" },
    { name: "Megan", githubLink: "https://github.com/mcdevittbass"},
    {name: "Hannah", githubLink: "https://github.com/hannahlivnat"},
  ];

  const ContributorLink = ({ person }) => (
    <a href={person.githubLink} target="_blank">{person.name}</a>
  )

  return (
    <div className={styles.contributors} id="contributor-section">
      <h2>Developers</h2>
      <div className={styles.names}>
        {people.map(p => <ContributorLink person={p} key={p.githubLink} />)}
      </div>
    </div>
  );
}