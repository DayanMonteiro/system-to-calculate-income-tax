// interface CpfMaskProps {
//   value: string;
// }

// function cpfMask({ value }: CpfMaskProps): string {

function cpfMask(value) {
  return (
    value
      // .replace(/^R\$ +/, '')
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  );
}

export default cpfMask;
