const mapping = (hii) =>
  hii.map(
    (me) =>
      `ksjfhjzshvhvjhvj${me.course}skjjhshlhjshhjhkj${me.institute}sgsegsg${me.moblieNo}gdsdg${me.city}kufukfyukfkuy`
  );
console.log(
  mapping([
    {
      course: "PDAC",
      institute: "PickupBiz",
      moblieNo: 9874561230,
      city: "Nanded",
    },
    {
      course: "Networking",
      institute: "Seed Infotech",
      moblieNo: 9874561555,
      city: "pune",
    },

    {
      course: "DAC ",
      institute: "C-DAC",
      moblieNo: 987456523523,
      city: "HYD",
    },

    {
      course: "HTML CSS",
      institute: "Naresh IT",
      moblieNo: 453636355,
      city: "Mumbai",
    },
  ])
);
