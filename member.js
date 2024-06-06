function skillsMember() {
  const member = this;
  const { skills } = member;
  if (skills) {
    return skills.map(skill => skill.name);
  }
  return [];
}