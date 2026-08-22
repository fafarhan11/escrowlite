#![no_std]

use soroban_sdk::{
    contract,
    contractimpl,
    contracttype,
    Address,
    Env,
};

#[derive(Clone)]
#[contracttype]
pub struct Escrow {
    pub client: Address,
    pub freelancer: Address,
    pub amount: i128,
    pub funded: bool,
    pub released: bool,
}

#[contract]
pub struct EscrowContract;

#[contractimpl]
impl EscrowContract {
    pub fn create_escrow(
        env: Env,
        escrow_id: u32,
        client: Address,
        freelancer: Address,
        amount: i128,
    ) {
        let escrow = Escrow {
            client,
            freelancer,
            amount,
            funded: false,
            released: false,
        };

        env.storage()
            .instance()
            .set(&escrow_id, &escrow);
    }

    pub fn fund_escrow(env: Env, escrow_id: u32) {
        let mut escrow: Escrow = env
            .storage()
            .instance()
            .get(&escrow_id)
            .unwrap();

        escrow.funded = true;

        env.storage()
            .instance()
            .set(&escrow_id, &escrow);
    }
    pub fn release_escrow(env: Env, escrow_id: u32) {
    let mut escrow: Escrow = env
        .storage()
        .instance()
        .get(&escrow_id)
        .unwrap();

    escrow.released = true;

    env.storage()
        .instance()
        .set(&escrow_id, &escrow);
    }

    pub fn get_escrow(env: Env, escrow_id: u32) -> Escrow {
        env.storage()
            .instance()
            .get(&escrow_id)
            .unwrap()
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use soroban_sdk::testutils::Address as _;

    #[test]
    fn test_create_escrow() {
        let env = Env::default();

        let client = Address::generate(&env);
        let freelancer = Address::generate(&env);

        let contract_id = env.register(EscrowContract, ());
        let client_contract = EscrowContractClient::new(&env, &contract_id);

        client_contract.create_escrow(&1, &client, &freelancer, &100);

        let escrow = client_contract.get_escrow(&1);

        assert_eq!(escrow.amount, 100);
        assert_eq!(escrow.funded, false);
        assert_eq!(escrow.released, false);
    }

    #[test]
    fn test_fund_escrow() {
        let env = Env::default();

        let client = Address::generate(&env);
        let freelancer = Address::generate(&env);

        let contract_id = env.register(EscrowContract, ());
        let client_contract = EscrowContractClient::new(&env, &contract_id);

        client_contract.create_escrow(&1, &client, &freelancer, &100);
        client_contract.fund_escrow(&1);

        let escrow = client_contract.get_escrow(&1);

        assert_eq!(escrow.funded, true);
    }

    #[test]
    fn test_release_escrow() {
        let env = Env::default();

        let client = Address::generate(&env);
        let freelancer = Address::generate(&env);

        let contract_id = env.register(EscrowContract, ());
        let client_contract = EscrowContractClient::new(&env, &contract_id);

        client_contract.create_escrow(&1, &client, &freelancer, &100);
        client_contract.fund_escrow(&1);
        client_contract.release_escrow(&1);

        let escrow = client_contract.get_escrow(&1);

        assert_eq!(escrow.released, true);
    }
}