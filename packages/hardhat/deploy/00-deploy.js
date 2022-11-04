
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("Greeter", {
    from: deployer,
    args: ["hello world"],
    log: true,
  });

  await deploy("Storage", {
    from: deployer,
    log: true,
  });

  await deploy("SupportToken", {
    from: deployer,
    log: true,
  });

  await deploy("Messenger", {
    from: deployer,
    args: ["Welcome to my Celo dApp"],
    log: true,
  });
 
};

module.exports.tags = ["Greeter", "Storage", "SupportToken", "Messenger"];
