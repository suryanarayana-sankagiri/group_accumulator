use rug::Integer;
#[derive(Clone, Debug, PartialEq, Eq, Hash)]
/// An RSA 2048 group element, directly wrapping a GMP integer from the `rug` crate.
pub struct Rsa2048Elem(Integer);
