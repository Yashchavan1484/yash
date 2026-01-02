import { Code2, Wrench, Brain, Database, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: [
      "Python",
      "JavaScript",
      "HTML/CSS (Basics)",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      "Flask",
      "FastAPI",
      "SQLAlchemy ORM",
      "REST APIs",
      "Twilio API",
    ],
  },
  {
    icon: Brain,
    title: "ML & Data",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "MySQL",
      "SQLite",
      "MongoDB",
      "PostgreSql"
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "PyCharm",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
  {
    icon: Brain,
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Critical Thinking",
      "Adaptability",
      "Leadership",
      "Attention to Detail",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Always learning and expanding my skillset. Currently exploring new technologies
            and design methodologies to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
