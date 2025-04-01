import { Achievement } from "@/props";

const Achievements = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      <Achievement
        
        title="Cipherthon 2024"
        description="Selected in top 2% Finalist - Cipherthon conducted by Chipher Schools ."
      />

      <Achievement
        
        title="Google Girl Hackathon 2025"
        description="Selected as semi-finalist in Google girl hackathon 2025."
      />
      <Achievement      
     
        title="Girscript summer of code 2024"
        description="Contributed in Open source Projects In GSSOC."
      />
    </section>
  );
};

export default Achievements;
